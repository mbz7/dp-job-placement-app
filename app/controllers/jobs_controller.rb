class JobsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid,
                with: :render_unprocessable_entity_response
  
    def index
      render json: Job.all
    end
  
    def show
      job = find_job
      render json: job, serializer: JobsWithClientAndCandidates
    end
  
    private
  
    def find_job
      Job.find(params[:id])
    end
  
    def render_not_found_response
      render json: { error: 'Job not found' }, status: :not_found
    end
  
    def render_unprocessable_entity_response(exception)
      render json: {
               errors: exception.record.errors.full_messages,
             },
             status: :unprocessable_entity
    end
  end

