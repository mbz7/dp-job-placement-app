class CandidatesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid,
                with: :render_unprocessable_entity_response
  
    def index
      render json: Candidate.all
    end
  
    def show
      candidate = find_candidate
      render json: candidate
    end
  
    def create
      candidate = Candidate.create!(candidate_params)
      render json: comment, status: :created
    end
  
    private
  
    def candidate_params
      params.permit(:job_id, :first_name, :last_name, :phone, :city_state)
    end
  
    def find_candidate
      Candidate.find(params[:id])
    end
  
    def render_not_found_response
      render json: { error: 'Candidate not found' }, status: :not_found
    end
  
    def render_unprocessable_entity_response(exception)
      render json: {
               errors: exception.record.errors.full_messages,
             },
             status: :unprocessable_entity
    end
  end
